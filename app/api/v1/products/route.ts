import { NextRequest, NextResponse } from "next/server";
import { getAllProducts } from "@/lib/actions/product.actions";

/**
 * GET /api/v1/products
 *
 * Query parameters:
 * - query: Search by product name (default: 'all')
 * - page: Page number (default: 1)
 * - limit: Items per page (default: 10)
 * - category: Filter by category (default: 'all')
 * - price: Price range filter, format: 'min-max' (default: 'all')
 * - rating: Minimum rating filter (default: 'all')
 * - sort: Sort order - 'lowest', 'highest', 'rating', 'newest' (default: 'newest')
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // Extract query parameters
    const query = searchParams.get("query") || "all";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category") || "all";
    const price = searchParams.get("price") || "all";
    const rating = searchParams.get("rating") || "all";
    const sort = searchParams.get("sort") || "newest";

    // Validate page and limit
    if (page < 1 || limit < 1 || limit > 100) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid page or limit parameters. Page must be >= 1, limit must be between 1 and 100.",
        },
        { status: 400 },
      );
    }

    // Get products from the database
    const result = await getAllProducts({
      query,
      page,
      limit,
      category,
      price,
      rating,
      sort,
    });

    return NextResponse.json(
      {
        success: true,
        data: result.data,
        pagination: {
          currentPage: page,
          totalPages: result.totalPages,
          limit,
          totalItems: result.totalPages * limit,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

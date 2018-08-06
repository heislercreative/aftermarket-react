class ProductsController < ApplicationController

  def index
    @products = Product.all.where(sold_out: false)
    render json: @products, each_serializer: ProductBasicsSerializer
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end
end

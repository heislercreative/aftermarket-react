class CartsController < ApplicationController

  def show
    @cart = Cart.find(params[:id])
    render json: @cart
  end

  def update
    @cart = Cart.find(params[:id])
    @cart.products.each do |product|
      product.sold_out = true
      product.save
    end
    @cart.products.clear
    render json: @cart, status: 201
  end

  def cart_params
    params.permit(:cart_id)
  end

end

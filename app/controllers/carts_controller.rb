class CartsController < ApplicationController

  def show
    @cart = Cart.find(params[:id])
    render json: @cart
  end

  def update
    @cart = Cart.find(params[:id])
    @cart.update(cart_params)
    render json: @cart, status: 201
  end

end

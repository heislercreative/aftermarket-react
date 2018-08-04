class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new_with_cart(user_params)
    if @user.save
      render json: @user, status: 201
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    if @user.save
      render json: @user, status: 201
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :address, :city, :state_initials, :zip)
  end

end

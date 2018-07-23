Rails.application.routes.draw do
  resources :user_products
  resources :carts
  resources :users
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

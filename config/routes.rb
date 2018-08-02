Rails.application.routes.draw do
  resources :user_products
  resources :carts
  resources :users
  resources :products
  scope '/api' do
    get :products, to: 'products#index'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

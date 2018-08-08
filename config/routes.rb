Rails.application.routes.draw do
  resources :carts
  resources :users
  resources :products
  scope '/api' do
    get 'products' => 'products#index'
    get 'products/:id' => 'products#show'
    post 'users' => 'users#create'
    post 'users/:id' => 'users#update'
    post 'sessions' => 'sessions#create'
    post 'cart_products' => 'cart_products#create'
    post 'cart_products/:id' => 'cart_products#destroy'
    post 'carts/:id' => 'carts#update'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

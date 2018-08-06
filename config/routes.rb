Rails.application.routes.draw do
  resources :user_products
  resources :carts
  resources :users
  resources :products
  scope '/api' do
    get 'products' => 'products#index'
    post 'users' => 'users#create'
    post 'users/:id' => 'users#update'
    post 'sessions' => 'sessions#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

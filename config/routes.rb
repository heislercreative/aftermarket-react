Rails.application.routes.draw do
  scope '/api' do
    get 'products' => 'products#index'
    get 'products/:id' => 'products#show'
    post 'users' => 'users#create'
    post 'users/:id' => 'users#update'
    post 'sessions' => 'sessions#create'
    post 'cart_products' => 'cart_products#create'
    post 'cart_products/:cart_id/:product_id' => 'cart_products#destroy'
    post 'carts/:id' => 'carts#update'
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

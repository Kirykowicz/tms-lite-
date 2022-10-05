Rails.application.routes.draw do
  resources :users
  resources :sites
  resources :stops
  resources :loads
  resources :carriers
  resources :customers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
end

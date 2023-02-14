Rails.application.routes.draw do
  devise_for :users
  resource :library, only: [:show], controller: :library
  resources :songs, only: [:new, :create]
  root 'pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

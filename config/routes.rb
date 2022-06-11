Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'  
  namespace :api do
    namespace :v1 do
      get 'users', to: 'users#index'
      post 'users/create'
      delete 'users/:id', to: 'beers#destroy'

      get 'messages', to: 'messages#index', via: :all
      resource :sessions, only: %i[show create destroy]
    end
  end
  get '*path' , to: 'pages#index'
end

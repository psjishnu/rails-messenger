Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'

  root 'pages#index'  
  namespace :api do
    namespace :v1 do
      resource :users, only: %i[index create]
      resource :messages, only: %i[index create]
      resource :sessions, only: %i[show create destroy]
    end
  end
  get '*path' , to: 'pages#index'
end

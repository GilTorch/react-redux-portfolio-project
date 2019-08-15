Rails.application.routes.draw do
  resources :lessons
  resources :users
  resources :chapters
  resources :courses 
  resources :tracks
  get "/lessons/:id/complete",to:"lessons#complete"
  post "/login",to:"authentication#login"
  post "/signup",to:"authentication#create"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

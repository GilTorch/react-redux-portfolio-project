Rails.application.routes.draw do
  resources :lessons
  resources :users
  get "/lessons/:id/complete",to:"lessons#complete"
  post "/login",to:"sessions#create",as:"login_path"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :projects
  put "projects/:id/add-skills", to: "projects#add_skill_to_project"
  resources :skills

  get "admins/verify", to: "admins#verify"
  post "admins/login", to: "admins#login"
  resources :admins, only: [:show, :create, :update, :destroy]


end

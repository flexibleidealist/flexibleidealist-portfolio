class ProjectsController < ApplicationController
  before_action :get_project, only: [:show, :update, :destroy, :add_skill_to_project]
  def index 
    projects = Project.all
    render json: projects, include: :skills
  end

  def show 
    render json: @project, include: :skills
  end

  def create
    new_project = Project.new(project_params)
    if new_project.save
      render json: new_project, status: :created
    else 
      render json: new_project.errors, status: :unprocessable_entity
    end
  end

  def update
    if @project.update(project_params)
      render json: @project, status: :ok 
    else 
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  def destroy 
    @project.destroy
    render json: "Deleted", status: :ok
  end

  
  def add_skill_to_project
    skill = Skill.find_by(name: skill_params[:name])
    if !@project.skills.include? skill 
      @project.skills.push(skill)
      render json: @project, include: :skills
    else 
      render json: @project, include: :skills
    end
  end
  
  private 
  def get_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :description, :repo_url, :image_url, :deployed_url)
  end

  def skill_params
    params.require(:skill).permit(:name)
  end
end

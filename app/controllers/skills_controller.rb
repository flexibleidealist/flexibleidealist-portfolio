class SkillsController < ApplicationController
  before_action :get_skill, only: [:show, :update, :destroy]
  def index 
    skills = Skill.all 
    render json: skills, status: :ok
  end

  def show
    render json: @skill, status: :ok
  end

  def create
    new_skill = Skill.new(skill_params)
    if new_skill.save
      render json: new_skill, status: :ok
    else 
      render json: new_skill.errors, status: :unprocessable_entity
    end
  end

  def update
    if @skill.update(skill_params)
      render json: @skill, status: :ok
    else
      render json: @skill.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @skill.destroy
    render json: "Deleted", status: :ok
  end

  private

  def get_skill
    @skill = Skill.find(params[:id])
  end

  def skill_params
    params.require(:skill).permit(:name, :icon, :category)
  end

end

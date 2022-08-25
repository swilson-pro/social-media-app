class UsersController < ApplicationController # defining the controller class

    def login # starts the login function declaration
      # in every single request, there exists the params hash.
      user = User.find_by!(email: params[:email]) # create a user variable that is returned from the Database
      if user && user.password_digest == params[:password]
      render json: user, status: :ok
    else
      render json: {error: 'Invalid email password'}, status: 404
    end
  end

    def forgot_password
      user = User.find_by!(email: params[:email])
      render json: {password: user.password_digest}, status: :ok
    end
  end

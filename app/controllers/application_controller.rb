class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  protected
      def verify_captcha response
        result = RestClient.post(
                    "https://www.google.com/recaptcha/api/siteverify",
                    secret: Rails.application.secrets[:recaptcha]["secret_key"],
                    response: response)

        JSON.parse(result)["success"]
      end

  before_action :authenticate_user!, only: [:create, :update, :destroy, :new, :edit]

  private
      def authenticate_user!
        unless current_user
          if request.xhr?
            render json: {msg: "Вы не авторизованы"}, status: 403
          else
            redirect_to root_path
          end
        end
      end
end

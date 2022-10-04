class LoadsController < ApplicationController

    def index
        render json: Load.all, status: :ok
    end
end

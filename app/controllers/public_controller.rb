class PublicController < ApplicationController
  def main
    if account_signed_in?
      redirect_to dashboard_path , flash:{ success:"Đăng nhập thành công! Chào mừng bạn đến với Property Finder!" }and return
    end 
    @properties = Property.latest;
  end
end

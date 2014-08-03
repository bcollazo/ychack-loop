require 'test_helper'

class MainControllerTest < ActionController::TestCase
  test "should get home" do
    get :index
    assert_response :success
  end

end

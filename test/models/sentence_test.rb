require 'test_helper'

class SentenceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should collide" do
  	assert sentences(:one).matches(sentences(:two))
  end

  test "should not collide" do
  	assert !sentences(:one).matches(sentences(:three))
  end
end

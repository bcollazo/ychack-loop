require 'test_helper'

class UserTest < ActiveSupport::TestCase
	test "the truth" do
		assert true
	end

	test "should make accounts" do
		assert User.count > 0
	end

	test "should get search results" do
		assert User.search("bryan").count == 1
		assert User.search("DAlton").count == 1
		assert User.search("787314").count == 1
		assert User.search("bdit").count == 1
	end
end

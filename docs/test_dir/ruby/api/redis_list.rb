#! /usr/bin/ruby
# -*- coding: utf-8 -*-
# ---------------------------------------------------------------------
#	redis_list.ruby
#
#					Jan/16/2020
#
# ---------------------------------------------------------------------
require 'redis'
require 'json'
#
STDERR.puts	"*** 開始 ***"
#

redis = Redis.new(:host => "localhost", :port => 6379)
keys = redis.keys
json_str = JSON.pretty_generate(keys)

puts "Content-type: text/json; charset=UTF-8\n\n"
puts json_str
#
STDERR.puts	"*** 終了 ***"
# ---------------------------------------------------------------------

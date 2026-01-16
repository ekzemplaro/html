#! /usr/bin/ruby
# -*- coding: utf-8 -*-
# ---------------------------------------------------------------------
#	redis_insert.ruby
#
#					Jan/16/2020
#
# ---------------------------------------------------------------------
require 'redis'
require	"cgi"
require	"json"
#
STDERR.puts	"*** 開始 ***"
#
$cgi=CGI.new
key = $cgi["key"]
value = $cgi["value"]

redis = Redis.new(:host => "localhost", :port => 6379)
redis.set key,value

puts "Content-type: text/json; charset=UTF-8\n\n"
#
puts value
#
STDERR.puts	"*** 終了 ***"

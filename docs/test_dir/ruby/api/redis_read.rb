#! /usr/bin/ruby
# -*- coding: utf-8 -*-
# ---------------------------------------------------------------------
#	redis_read.ruby
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
# key = "t1852"

redis = Redis.new(:host => "localhost", :port => 6379)
value = redis.get key

puts "Content-type: text/json; charset=UTF-8\n\n"
puts value
#
STDERR.puts	"*** 終了 ***"
# ---------------------------------------------------------------------

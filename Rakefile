# Dependencies
require 'rubygems'
require 'optparse'
require 'yaml'

# Rsync To Hosting
namespace :deploy do
  desc "rsync to racnching subdomain"
    task :ranching do
      system('rsync --compress --recursive --checksum --progress --delete _site/ justinal@justinalm.com:~/public_html/ranching/')
    end
end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
nicholas = Admin.create!(username: "flexibleidealist", password: "257699141bk")

pp "created #{Admin.count} admins!"

p1 = Project.create!(title: "NYC Beach App", description: "Desktop and mobile app that consumes third-party APIs to display location and accessibility information for NYC beaches and to get current weather conditions.", repo_url: "https://github.com/flexibleidealist/NYC-Beach-App", deployed_url: "nyc-beach-app.netlify.app", image_url: "https://i.imgur.com/rYphrMd.png")
p2 = Project.create!(title: "tiny library", description: "Full CRUD app that creates a catalogue for free, neighborhood-based libraries using an Airtable database. Users can view the current catalogue for tiny library locations, add a record when the donate a book, and delete a record when the take a book.", deployed_url: "https://tiny-library.netlify.app/", repo_url: "https://github.com/flexibleidealist/tiny-library", image_url: "https://i.imgur.com/UrRcBBH.png")
p3 = Project.create!(title: "B-Side Record Collective", description: "An online marketplace for buying and selling vinyl records with full CRUD and user authentication. Users can browse and search a selection of records, add records to a shopping cart, and post their own for sale.", repo_url: "https://github.com/flexibleidealist/b-side-collective/tree/main", deployed_url: "https://b-side-collective.netlify.app/", image_url: "https://i.imgur.com/xMVnWir.png")
p4 = Project.create!(title: "ArtSpace", description: "Full stack app that allows artists to curate online shows of their work. Full CRUD and user authentication allows users to update show information, add and remove works, and change profile information.", repo_url: "https://github.com/flexibleidealist/Art-Space", deployed_url: "https://myartspace.netlify.app/", image_url: "https://i.imgur.com/2IKFCT8.png" )

pp "created #{Project.count} projects!"

js = Skill.create!(name: "Javascript", icon: "", category: "language")
nodejs = Skill.create!(name: "Node.js", icon: "", category: "")
html = Skill.create!(name: "HTML", icon: "", category: "")
css = Skill.create!(name: "CSS", icon: "", category: "")
sql = Skill.create!(name: "SQL", icon: "", category: "")
ruby = Skill.create!(name: "Ruby", icon: "", category: "language")
express = Skill.create!(name: "Express.js", icon: "", category: "")
mongoose = Skill.create!(name: "Mongoose", icon: "", category: "")
rails = Skill.create!(name: "Rails", icon: "", category: "")
git = Skill.create!(name: "Git", icon: "", category: "")
react = Skill.create!(name: "React", icon: "", category: "")

pp "create #{Skill.count} skills!"

p1.skills.push(html, css, js, nodejs)
p2.skills.push(html, css, js, nodejs, react)
p3.skills.push(html, css, js, nodejs, react, express, mongoose)
p4.skills.push(html, css, js, nodejs, react, rails, ruby)


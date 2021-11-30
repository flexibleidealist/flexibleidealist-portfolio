# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Skill.destroy_all
Project.destroy_all
Admin.destroy_all

nicholas = Admin.create!(username: "flexibleidealist", password: "257699141bk")

pp "created #{Admin.count} admins!"

p1 = Project.create!(title: "NYC Beach App", description: "NYC Beach App consumes third-party APIs to display location and accessibility information for NYC beaches and get current weather conditions. Built with HTML, CSS, and JavaScript.", repo_url: "https://github.com/flexibleidealist/NYC-Beach-App", deployed_url: "https://nyc-beach-app.netlify.app", image_url: "https://i.imgur.com/rYphrMd.png")
p2 = Project.create!(title: "tiny library", description: "tiny library is a React app that creates a catalogue for free, neighborhood-based libraries with an Airtable database. Users can view the current catalogues for tiny library locations, add records when the donate books, and delete records when the take books. Built with React, CSS, and Airtable.", deployed_url: "https://tiny-library.netlify.app/", repo_url: "https://github.com/flexibleidealist/tiny-library", image_url: "https://i.imgur.com/UrRcBBH.png")
p3 = Project.create!(title: "B-Side Collective", description: "B-Side Collective is an online marketplace for buying and selling vinyl records with full CRUD and user authentication. Users can browse and search a selection of records, add records to a shopping cart, and post items for sale. Built with MERN stack.", repo_url: "https://github.com/flexibleidealist/b-side-collective/tree/main", deployed_url: "https://b-side-collective.netlify.app/", image_url: "https://i.imgur.com/xMVnWir.png")
p4 = Project.create!(title: "ArtSpace", description: "ArtSpace is a full-stack app where artists curate online shows of their work. Full CRUD and authentication allow users to update show information, add and remove works, and update profile information. Built with React, CSS, and Ruby on Rails.", repo_url: "https://github.com/flexibleidealist/Art-Space", deployed_url: "https://myartspace.netlify.app/", image_url: "https://i.imgur.com/2IKFCT8.png" )
p5 = Project.create!(title: "DrawBrite", description: "DrawBrite is a full-stack grid-based drawing app that allows users to create drawings and share them to a users' gallery. Built with MERN stack.", repo_url: "https://github.com/flexibleidealist/drawing-app", deployed_url: "https://drawbrite.netlify.app/", image_url: "https://i.imgur.com/Wtth3ih.png")
pp "created #{Project.count} projects!"

html = Skill.create!(name: "HTML", icon: "/assets/icons/skills/html.svg", category: "")
css = Skill.create!(name: "CSS", icon: "/assets/icons/skills/css.png", category: "")
js = Skill.create!(name: "Javascript", icon: "/assets/icons/skills/javascript.svg", category: "language")
nodejs = Skill.create!(name: "Node.js", icon: "/assets/icons/skills/nodejs.png", category: "")
react = Skill.create!(name: "React", icon: "/assets/icons/skills/react.svg", category: "")
express = Skill.create!(name: "Express.js", icon: "/assets/icons/skills/express.png", category: "")
mongoDB = Skill.create!(name: "MongoDB", icon: "/assets/icons/skills/mongoDB.png", category: "")
ruby = Skill.create!(name: "Ruby", icon: "/assets/icons/skills/ruby.svg", category: "language")
rails = Skill.create!(name: "Rails", icon: "/assets/icons/skills/rails.png", category: "")
sql = Skill.create!(name: "SQL", icon: "/assets/icons/skills/sql.png", category: "")
postgresql = Skill.create!(name: "Airtable", icon: "/assets/icons/skills/postgresql.png", category: "")
git = Skill.create!(name: "Git", icon: "/assets/icons/skills/git.png", category: "")
airtable = Skill.create!(name: "Airtable", icon: "/assets/icons/skills/airtable.svg", category: "")
postman = Skill.create!(name: "Postman", icon: "/assets/icons/skills/postman.svg", category: "")
heroku = Skill.create!(name: "Heroku", icon: "/assets/icons/skills/heroku.svg", category: "")



pp "created #{Skill.count} skills!"

p1.skills.push(html, css, js, nodejs)
p2.skills.push(html, css, js, nodejs, react)
p3.skills.push(html, css, js, nodejs, react, express, mongoDB)
p4.skills.push(html, css, js, nodejs, react, rails, ruby)


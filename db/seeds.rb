puts 'destroying data before seeding'
Customer.destroy_all 
Carrier.destroy_all

puts 'seeding customers'
Customer.create(name: 'Aldi', address: '1200 N Kirk Rd, Batavia, IL 60510')
Customer.create(name: 'Kroger', address: '1014 Vine St, Cincinnati, OH 45202')
Customer.create(name: 'Jewel', address: '150 E Pierce Rd, Itasca, IL 60143')
Customer.create(name: 'KeHe', address: '1245 E Diehl Rd #200, Naperville, IL 60563')
Customer.create(name: 'ADM', address: '77 W Wacker Dr #4600, Chicago, IL 60601')
puts 'finished seeding customers'

puts 'seeding carriers'
Carrier.create(name: 'Monson & Sons', address: '216 5th St NW, Britt, IA 50423', mc_number: 447750)
Carrier.create(name: 'Buffalo Transport Co', address: '21 Lasalle Ave, Buffalo, NY 14214', mc_number: 445195)
puts 'finished seeding carriers'

puts 'seeding sites'
Site.create(name: 'Gelita USA', city: 'Calumet City', state: 'IL', address: '10 Wentworth Ave, Calumet City, IL 60409')
Site.create(name: 'JJ Fuds', city: 'Valparaiso', state: 'IN', address: '316 N 400 E, Valparaiso, IN 46383')
Site.create(name: 'Steel of West Virginia', city: 'Huntington', state: 'WV', address: '17th Street &, 2nd Ave, Huntington, WV 25703')
puts 'seeding sites'
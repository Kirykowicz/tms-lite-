puts 'destroying data before seeding'
Customer.destroy_all 
Carrier.destroy_all
Load.destroy_all
Stop.destroy_all

puts 'seeding customers'
cu1 = Customer.create(name: 'Aldi', address: '1200 N Kirk Rd, Batavia, IL 60510')
cu2 = Customer.create(name: 'Kroger', address: '1014 Vine St, Cincinnati, OH 45202')
cu3 = Customer.create(name: 'Jewel', address: '150 E Pierce Rd, Itasca, IL 60143')
cu4 = Customer.create(name: 'KeHe', address: '1245 E Diehl Rd #200, Naperville, IL 60563')
cu5 = Customer.create(name: 'ADM', address: '77 W Wacker Dr #4600, Chicago, IL 60601')
puts 'finished seeding customers'

puts 'seeding carriers'
ca1 = Carrier.create(name: 'Monson & Sons', address: '216 5th St NW, Britt, IA 50423', mc_number: 447750)
ca2 = Carrier.create(name: 'Buffalo Transport Co', address: '21 Lasalle Ave, Buffalo, NY 14214', mc_number: 445195)
puts 'finished seeding carriers'

puts 'seeding sites'
s1 = Site.create(name: 'Gelita USA', city: 'Calumet City', state: 'IL', address: '10 Wentworth Ave, Calumet City, IL 60409')
s2 = Site.create(name: 'JJ Fuds', city: 'Valparaiso', state: 'IN', address: '316 N 400 E, Valparaiso, IN 46383')
s3 = Site.create(name: 'Steel of West Virginia', city: 'Huntington', state: 'WV', address: '17th Street &, 2nd Ave, Huntington, WV 25703')
puts 'seeding sites'

puts 'seeding loads'
l1 = Load.create(customer_id: cu1.id, carrier_id: ca1.id, revenue: 1000, cost: 800, equipment_type: "Van")
puts 'finished seeding loads'

puts 'seeding stops'
    st1 = Stop.create(load_id: l1.id, site_id: s1.id, time: "12:00")
    st2 = Stop.create(load_id: l1.id, site_id: s2.id, time: "13:00")
puts 'finished seeding stops'
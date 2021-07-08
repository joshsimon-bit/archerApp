INSERT INTO users
(name, email, user_name)
VALUES
('Alyna', 'alyna@fakeemail.com', 'Alyna_fake');

('Brittany', 'brittany@fakeemail.com', 'Brittany_fake');

('Joshua', 'joshua@fakeemail.com', 'Joshua_fake');


INSERT INTO locations
    (state_name, location_name, location_description, location_activities)
VALUES
     ('Texas', 'Lake Allatoona', 'Peaceful and calm waters', 'Kayaking'),

    ('Texas', 'Good Water Loop',  'Features a lake and 26.9 trail', 'Backpacking and Hiking'),

    ('Texas', 'Barnwell Mountain Recreation Area Loop', 'Wooded area with dirt trails and shallow water crossings', 'OHV');


    INSERT INTO activities
    (activity_name, activity_level, activity_terrain)
    VALUES
    ('hiking', 'moderate', 'unpaved'),
    ('kayaking', 'easy', 'river'),
    ('backpacking', 'difficult', 'varrying terrian');

    INSERT INTO reviews
    (score, content, locations_id, user_id)
    VALUES
    (5, 'Soooo much fun', 1, 1 ),

    (5, 'Amazing experience! Beautiful and Peaceful', 2, 2),

    (5, 'This place is a gem! Grateful to have found this trail', 3, 3);
BEGIN;
INSERT INTO users (username, email, password, image)
values (
        'haitham',
        'haitham@gmail.com',
        '$2b$10$d4K/2Gd.8k/2C7TADt0XIuvn9lpUZQF1COwgH/rIf/q5I1obtcMmy',
        'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
    );
INSERT INTO categories (name)
values ('Laptop'),
    ('Smart Phone'),
    ('Smart TV'),
    ('Consoles'),
    ('Accessories');
COMMIT;
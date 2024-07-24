import request from 'supertest';
import app from '../app';

describe('POST /register', () => {
  it('should return 201', async () => {
    const res = await request(app).post('/register').send({
      firstName: 'John',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User created');
  });

  it('should return 400', async () => {
    const res = await request(app).post('/register').send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('First name is required');
  });
});

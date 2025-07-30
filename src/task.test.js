const Task = require('../src/models/task');

describe('Task Model', () => {
  describe('Create', () => {
    it('should build a task with valid data', () => {
      const taskData = {
        title: 'Test task',
        description: 'Test description',
        status: 'pending'
      };

      const task = Task.build(taskData);

      expect(task.title).toBe(taskData.title);
      expect(task.description).toBe(taskData.description);
      expect(task.status).toBe(taskData.status);
    });

    it('should fail validation if title is missing', async () => {
      expect.assertions(1);
      const task = Task.build({ status: 'pending' });

      try {
        await task.validate();
      } catch (error) {
        expect(error.message).toMatch(/title/i);
      }
    });
  });

  describe('Read', () => {
    it('should allow accessing task properties after build', () => {
      const task = Task.build({
        title: 'Read task',
        description: 'This is a read test',
        status: 'done'
      });

      expect(task.title).toBe('Read task');
      expect(task.description).toBe('This is a read test');
      expect(task.status).toBe('done');
    });
  });

  describe('Update', () => {
    it('should allow status update in memory', async () => {
      const task = Task.build({ title: 'Update test', status: 'pending' });

      task.status = 'completed';
      await task.validate();

      expect(task.status).toBe('completed');
    });

    it('should fail validation with empty title', async () => {
      expect.assertions(1);
      const task = Task.build({ title: 'Original title', status: 'pending' });

      task.title = '';

      try {
        await task.validate();
      } catch (err) {
        expect(err.message).toMatch(/title/i);
      }
    });
  });
});

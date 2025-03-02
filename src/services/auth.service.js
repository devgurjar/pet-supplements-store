// Mock user database
const mockUsers = [
    {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    }
  ];
  
  const AuthService = {
    login: async (email, password) => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      const user = mockUsers.find(u => u.email === email);
      
      if (user && user.password === password) {
        const token = `mock-jwt-token-${Date.now()}`;
        const userData = {
          id: user.id,
          name: user.name,
          email: user.email
        };
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        
        return {
          user: userData,
          token
        };
      }
      
      throw new Error('Invalid email or password');
    },
  
    register: async (userData) => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      // Check if user already exists
      if (mockUsers.find(u => u.email === userData.email)) {
        throw new Error('User already exists');
      }
  
      // Create new user
      const newUser = {
        id: mockUsers.length + 1,
        ...userData
      };
  
      mockUsers.push(newUser);
  
      return {
        success: true,
        message: 'Registration successful'
      };
    },
  
    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  
    getCurrentUser: () => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    },
  
    verifyToken: async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      
      // For mock purposes, always verify if token exists
      return { valid: true };
    }
  };
  
  export default AuthService;
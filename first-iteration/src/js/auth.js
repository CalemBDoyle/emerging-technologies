export const USERS_KEY = 'cb_users';
export const CURRENT_KEY = 'cb_current';

/* simple client-side auth for demo only — passwords stored client-side (not secure) */

function loadUsers(){
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); }
  catch { return []; }
}
function saveUsers(users){ localStorage.setItem(USERS_KEY, JSON.stringify(users)); }

export function getCurrentUser(){
  try { return JSON.parse(localStorage.getItem(CURRENT_KEY)); }
  catch { return null; }
}
function setCurrentUser(user){ localStorage.setItem(CURRENT_KEY, JSON.stringify(user)); }

export function logout(){
  localStorage.removeItem(CURRENT_KEY);
}

export function registerUser({ name, email, password }){
  if (!name || !email || !password) return { success:false, message:'All fields required' };
  const users = loadUsers();
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) return { success:false, message:'Email already registered' };
  const user = { id: `u-${Date.now()}`, name, email: email.toLowerCase(), password };
  users.push(user);
  saveUsers(users);
  setCurrentUser({ id: user.id, name: user.name, email: user.email });
  return { success:true, user };
}

export function loginUser(email, password){
  if (!email || !password) return { success:false, message:'Email and password required' };
  const users = loadUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (!user) return { success:false, message:'Invalid credentials' };
  setCurrentUser({ id: user.id, name: user.name, email: user.email });
  return { success:true, user: { id: user.id, name: user.name, email: user.email } };
}
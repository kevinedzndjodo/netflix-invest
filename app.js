// Page content
const pages = {
  home: `
              <section class="text-center mb-12 max-h-screen flex-col justify-start items-center">
                  <h1 class="text-4xl font-bold mb-4">Get up to $3,500 from Netflix.</h1>
                  <p class="text-xl text-gray-600">Your path to financial growth starts here</p>
              </section>
              <section class="grid md:grid-cols-3 gap-8 mb-12">
                  <div class="bg-white p-6 rounded-lg shadow-md">
                      <h2 class="text-2xl font-semibold mb-4">Easy Investing</h2>
                      <p class="text-gray-600">Start your investment journey with by just watching african movies anouncements and earn commisions
                      </p>
                  </div>
                  <div class="bg-white p-6 rounded-lg shadow-md">
                      <h2 class="text-2xl font-semibold mb-4">Smart Analytics</h2>
                      <p class="text-gray-600">Track your investments with our intuitive dashboard</p>
                  </div>
                  <div class="bg-white p-6 rounded-lg shadow-md">
                      <h2 class="text-2xl font-semibold mb-4">Secure Platform</h2>
                      <p class="text-gray-600">Your investments are protected by state-of-the-art security</p>
                  </div>
              </section>
              <section class="bg-red-100 p-8 rounded-lg mb-4 capitalize">
                  <h2 class="text-3xl font-semibold mb-4">Why Choose Netflix to invest?</h2>
                  <p>Break the limits of traditional energy
Replace costly, unreliable grid power with solar energy and backup battery</p>
                  <ul class="list-disc list-inside text-gray-700">
                      <li>Low fees and transparent pricing</li>
                      <li>Diverse investment options</li>
                      <li>Expert financial advice</li>
                      <li>24/7 customer support</li>
                  </ul>

              </section>
                <section class="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
                  <h1 class="text-3xl font-bold mb-6 text-center">Register</h1>
                  <form id="registrationForm" class="space-y-4">
                      <div>
                          <label for="fullName" class="block mb-2 text-md font-medium text-gray-600">Full Name</label>
                          <input type="text" id="fullName" name="fullName" required class="w-full p-2 border rounded">
                      </div>
                      <div>
                          <label for="email" class="block mb-2 text-md font-medium text-gray-600">Email Address</label>
                          <input type="email" id="email" name="email" required class="w-full p-2 border rounded">
                      </div>
                                            <div>
                          <label for="phone" class="block mb-2 text-md font-medium text-gray-600">Phone number</label>
                          <input type="tel" id="phone" name="phoneNumber" required class="w-full p-2 border rounded">
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-md font-medium text-gray-600">Password</label>
                          <input type="password" id="password" name="password" required class="w-full p-2 border rounded">
                      </div>
                      <div>
                          <label for="confirmPassword" class="block mb-2 text-md font-medium text-gray-600">Confirm Password</label>
                          <input type="password" id="confirmPassword" name="confirmPassword" required class="w-full p-2 border rounded">
                      </div>

                      <div>
                          <button type="submit" class="w-full bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700 hover:font-bold">Register</button>
                      </div>
                  </form>
              </section>
          `,
  dashboard: `
              <section class="bg-white p-8 rounded-lg shadow-md mb-8">
                  <h1 class="text-3xl font-bold mb-6">Your Investment Dashboard</h1>
                  <div class="grid md:grid-cols-3 gap-6">
                      <div class="bg-red-100 p-6 rounded-lg">
                          <h2 class="text-xl font-semibold mb-2">Total Investment</h2>
                          <p id="totalInvestment" class="text-3xl font-bold text-red-800">$0.00</p>
                      </div>
                      <div class="bg-green-100 p-6 rounded-lg">
                          <h2 class="text-xl font-semibold mb-2">Profits</h2>
                          <p id="profits" class="text-3xl font-bold text-green-600">$0.00</p>
                      </div>
                      <div class="bg-purple-100 p-6 rounded-lg">
                          <h2 class="text-xl font-semibold mb-2">Total Balance</h2>
                          <p id="totalBalance" class="text-3xl font-bold text-purple-600">$0.00</p>
                      </div>
                  </div>
              </section>
              <section class="bg-white p-8 rounded-lg shadow-md mb-8">
                  <h2 class="text-2xl font-semibold mb-4">Manage Your Investment</h2>
                  <div class="grid md:grid-cols-2 gap-6">
                      <div>
                          <h3 class="text-xl mb-2">Top Up</h3>
                          <input type="number" id="topUpAmount" placeholder="Enter amount" class="w-full p-2 border rounded mb-2">
                          <button id="topUpBtn" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Top Up</button>
                      </div>
                      <div>
                          <h3 class="text-xl mb-2">Withdraw</h3>
                          <input type="number" id="withdrawAmount" placeholder="Enter amount" class="w-full p-2 border rounded mb-2">
                          <button id="withdrawBtn" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800">Withdraw</button>
                      </div>
                  </div>
              </section>
              <section class="bg-white p-8 rounded-lg shadow-md">
                  <h2 class="text-2xl font-semibold mb-4">Transaction History</h2>
                  <ul id="transactionHistory" class="space-y-2">
                      <!-- Transaction history will be populated here -->
                  </ul>
              </section>
          `,
  about: `
              <section class="bg-white p-8 rounded-lg shadow-md mb-8">
                  <h1 class="text-3xl font-bold mb-6">About InvestSmart</h1>
                  <p class="text-gray-600 mb-4">InvestSmart is a cutting-edge investment platform designed to make financial growth accessible to everyone. Our mission is to empower individuals to take control of their financial future through smart, easy-to-use investment tools.</p>
                  <p class="text-gray-600 mb-4">Founded in 2020, InvestSmart has quickly grown to become a trusted name in the fintech industry. Our team of financial experts and tech innovators work tirelessly to provide you with the best investment experience possible.</p>
              </section>
              <section class="bg-red-100 p-8 rounded-lg mb-8">
                  <h2 class="text-2xl font-semibold mb-4">Our Values</h2>
                  <ul class="list-disc list-inside text-gray-700">
                      <li>Transparency in all our operations</li>
                      <li>Customer-first approach in everything we do</li>
                      <li>Continuous innovation to stay ahead of the curve</li>
                      <li>Commitment to financial education and empowerment</li>
                  </ul>
              </section>
              <section class="bg-white p-8 rounded-lg shadow-md">
                  <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
                  <p class="text-gray-600 mb-2">Email: support@investsmart.com</p>
                  <p class="text-gray-600 mb-2">Phone: (555) 123-4567</p>
                  <p class="text-gray-600">Address: 123 Finance Street, New York, NY 10001</p>
              </section>
          `,
  register: `
              <section class="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
                  <h1 class="text-3xl font-bold mb-6 text-center">Register for InvestSmart</h1>
                  <form id="registrationForm" class="space-y-4">
                      <div>
                          <label for="fullName" class="block mb-2 text-md font-medium text-gray-600">Full Name</label>
                          <input type="text" id="fullName" name="fullName" required class="w-full p-2 border rounded">
                      </div>
                      <div>
                          <label for="email" class="block mb-2 text-md font-medium text-gray-600">Email Address</label>
                          <input type="email" id="email" name="email" required class="w-full p-2 border rounded">
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-md font-medium text-gray-600">Password</label>
                          <input type="password" id="password" name="password" required class="w-full p-2 border rounded">
                      </div>
                      <div>
                          <label for="confirmPassword" class="block mb-2 text-md font-medium text-gray-600">Confirm Password</label>
                          <input type="password" id="confirmPassword" name="confirmPassword" required class="w-full p-2 border rounded">
                      </div>
                      <div>
                          <button type="submit" class="w-full bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700">Register</button>
                      </div>
                  </form>
              </section>
          `,
};

// Initialize investment data
let investmentData = {
  totalInvestment: 0,
  profits: 0,
  totalBalance: 0,
  transactions: [],
};

// Navigation function
function navigateTo(page) {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = pages[page];
  if (page === "dashboard") {
    initDashboard();
  } else if (page === "register") {
    initRegistrationForm();
  }
  // Close mobile menu after navigation
  document.getElementById("mobile-menu").classList.add("hidden");
  document.getElementById("menu-btn").classList.remove("open");
}

// Initialize dashboard
function initDashboard() {
  // ... (previous dashboard initialization code remains the same)
}

// Initialize registration form
function initRegistrationForm() {
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Here you would typically send this data to your backend
    console.log("Registration data:", data);
    alert(
      "Registration successful! (This is a demo, no actual account was created)"
    );
    form.reset();
  });
}

// Set up navigation
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo(e.target.dataset.page);
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
});

// Initial page load
navigateTo("home");

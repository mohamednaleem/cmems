import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Load the dataset
url = "https://archive.ics.uci.edu/ml/machine-learning-databases/autos/imports-85.data"
column_names = [
    "symboling", "normalized_losses", "make", "fuel_type", "aspiration", "num_doors",
    "body_style", "drive_wheels", "engine_location", "wheel_base", "length", "width",
    "height", "curb_weight", "engine_type", "num_cylinders", "engine_size",
    "fuel_system", "bore", "stroke", "compression_ratio", "horsepower", "peak_rpm",
    "city_mpg", "highway_mpg", "price"
]
data = pd.read_csv(url, names=column_names)

# Display the first few rows of the dataset
print(data.head())

# Preprocess the data
data.replace("?", pd.NA, inplace=True)
data.dropna(subset=["price"], inplace=True)
data["price"] = data["price"].astype(float)

# Convert columns to numeric, forcing non-numeric values to NaN
for column in ["normalized_losses", "bore", "stroke", "horsepower", "peak_rpm"]:
    data[column] = pd.to_numeric(data[column], errors='coerce')
    data[column].fillna(data[column].mean(), inplace=True)

# Select features and target variable
features = ["wheel_base", "length", "width", "curb_weight", "engine_size", 
            "horsepower", "city_mpg", "highway_mpg"]
X = data[features]
y = data["price"]

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Build and train the Linear Regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error: {mse}")
print(f"R-squared: {r2}")

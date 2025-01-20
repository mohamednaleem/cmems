import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.metrics import accuracy_score, confusion_matrix

# Load the dataset
url = "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/iris.csv"
data = pd.read_csv(url)
print(data.head())

# Extract features
X = data.drop('species', axis=1)

# Standardize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Build the K-Means model
kmeans = KMeans(n_clusters=3, random_state=42)
kmeans.fit(X_scaled)

# Predict the clusters
y_kmeans = kmeans.predict(X_scaled)

# Map the predicted clusters to the actual species
def map_clusters(y_kmeans, y_true):
    mapping = {}
    for i in range(3):
        mask = (y_kmeans == i)
        most_common = y_true[mask].mode()[0]
        mapping[i] = most_common
    return [mapping[label] for label in y_kmeans]

y_true = data['species']
y_pred = map_clusters(y_kmeans, y_true)

# Calculate accuracy
accuracy = accuracy_score(y_true, y_pred)
print(f"Accuracy: {accuracy}")

# Display confusion matrix
print("Confusion Matrix:")
print(confusion_matrix(y_true, y_pred))

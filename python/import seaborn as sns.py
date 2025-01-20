import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# Load the data into a DataFrame
url = "https://archive.ics.uci.edu/ml/machine-learning-databases/wine/wine.data"
column_names = ['Alcohol', 'Malic acid', 'Ash', 'Alcalinity of ash', 'Magnesium', 
                'Total phenols', 'Flavanoids', 'Nonflavanoid phenols', 'Proanthocyanins', 
                'Color intensity', 'Hue', 'OD280/OD315 of diluted wines', 'Proline']
wine_df = pd.read_csv(url, header=None, names=column_names)
df = [[wine_df]]
# Create the heatmap
sns.heatmap(wine_df.select_dtypes(include=['number']).corr(method='pearson'),
            annot=True)

# Show the plot
plt.show()
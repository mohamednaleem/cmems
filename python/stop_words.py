def stop_words(text, k):
  """
  Finds the stop words in a given text that occur at least k times.
 
  Args:
    text: The input text.
    k: The threshold occurrence count for a word to be a stop word.
 
  Returns:
    A list of stop words in order of their first occurrence.
  """
 
  # Split the text into words
  words = text.split()
  print('words', words)
 
  # Create a dictionary to store word counts
  word_counts = {}
 
  # Count the occurrences of each word
  for word in words:
    if word in word_counts:
      word_counts[word] += 1
    else:
      word_counts[word] = 1
  print('word_counts', word_counts)
 
  # Filter words that occur at least k times
  stop_words = [word for word, count in word_counts.items() if count >= k]
 
  # Return the stop words in order of their first occurrence
  return stop_words
 
# Example usage
text = "the brown fox jumps over the brown dog and runs away dog to a brown house"
k = 3
result = stop_words(text, k)
print(result)
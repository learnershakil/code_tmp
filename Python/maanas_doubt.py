import numpy as np

data =([[1, 2, 3], [4, 5, 6]])

np.savetxt("practice_data_loading.txt", data, delimiter=",")
loaded_data_txt = np.loadtxt("practice_data_loading.txt", delimiter=",")
np.save("data.npy", data)
loaded_data_npy = np.load("data.npy")

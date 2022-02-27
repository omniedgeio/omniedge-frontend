# omniedge-linux-cli



**Important! You have to create an account to use linux cli.**

## How to use omniedge linux Cli 0.2.2

1. Sign up your account: [Sign up](https://omniedge.io/register)
2. Download and install omnidge cli by running the following command:

```
curl https://omniedge.io/omniedge-install.sh | bash
```

3. Login By Password:

```
omniedge login -u yourname@youremail.com
```

4. Login By Secret-Key, You can generate secret-key on omniedge dashboard:

```
omniedge login -s yoursecuritykey
```

5. Join Your Network,you can just call omniedge join, it will automatically prompt the available network for you to choose. And you can also add one parameter **-n** to specify the network id manually. And then, enjoy the omniedge network.

```
omniedge join
```
and select your virtual network or

```
omniedge join -n 'virtual-network-id'
```

with a speicified virtual network.

4. Wait a second and a secure VPN will be established

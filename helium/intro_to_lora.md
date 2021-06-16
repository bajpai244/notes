# LORA

LoRa =  wireless tech where we can transfer data upto 0.3kbps to 5.5kbps.

It already implies that it is ideal for IOT device that want otimize for battery life, as it takes very less power compared to wifi enabled devices.

A data transfer typically requires these 4 components:
1. end node (your iot device)
2. Gateway ( connects ur iot to device to network server )
3. Network Server ( manages the network and the provides the application servers the data of their IOT devices )
4. Applicatin Server ( the server that processes the data of any given IOT device )

 End nodes transfer data to all nearby ( almost ) Gateways and these gateways then provide the data to the network server which filters all duplicate data and then provides it to the Application server responsible for processing the sensor data.

![image](https://cloud-jz29tcj33-hack-club-bot.vercel.app/0image.png)

The transfer of data is bi-directional.

When end node transfer data to gateway then it is called an **uplink** and it recieves data from the gateway then it is called **downlink**.

This bi-directional behaviour ensures that firmware of the remote nodes can be updated via the network, over the air.

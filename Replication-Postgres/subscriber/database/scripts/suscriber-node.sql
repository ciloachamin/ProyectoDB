-- Script for the subscriber node

-------------------------------------------------------
-- Check installed extensions
-------------------------------------------------------
SELECT * FROM pg_extension;

-------------------------------------------------------
-- Install pglogical extension
-------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS pglogical;

-------------------------------------------------------
-- Create a subscriber node
-------------------------------------------------------

SELECT pglogical.create_node(
    node_name := 'subscriber-node',
    dsn := 'host=subscriber-db port=5432 dbname=restaurante user=subscriber password=subscriber'
);

-------------------------------------------------------
-- Create subscription to the master node or provider 
-- node, this will start in the background, 
-- the synchronization and replication process
-------------------------------------------------------

SELECT pglogical.create_subscription(
    subscription_name := 'subscription',
    provider_dsn := 'host=provider-db port=5432 dbname=restaurante user=provider password=provider'
);

---------------------------------------------------------------------------

----SELECT pglogical.create_replication_set('default', true);
SELECT pglogical.alter_subscription_add_replication_set('subscription', 'default');
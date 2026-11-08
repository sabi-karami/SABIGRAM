export const migration027RemoteChannelSABIGRAM = {
  name: "remote-channel-sabigram",
  version: 27,
  up: ({ db, hasColumn, tableExists }) => {
    // Add source_url column to store the base URL of the source SABIGRAM server
    // for SABIGRAM-provider remote channel sources.
    if (tableExists("remote_channel_sources")) {
      if (!hasColumn("remote_channel_sources", "source_url")) {
        db.run("ALTER TABLE remote_channel_sources ADD COLUMN source_url TEXT");
      }
    }

    // Add a unique index for SABIGRAM queue items keyed by source_id +
    // source_version + sabigram_message_id (reusing telegram_message_id column
    // since the semantics are identical: a numeric remote message ID).
    // The existing telegram_update_id unique index already covers Telegram items;
    // the telegram_message_id index covers both providers since we reuse the column.
    // No new index is needed — the existing idx_remote_channel_queue_source_message
    // already provides deduplication across all providers.
  },
};

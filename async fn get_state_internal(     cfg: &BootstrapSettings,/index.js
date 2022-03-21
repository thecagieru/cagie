async fn get_state_internal(
    cfg: &BootstrapSettings, // TODO: should be a &'static ... see #1848
    bootstrap_addr: &SocketAddr,
    bootstrap_public_key: &PublicKey,
    establisher: &mut Establisher,
    our_version: Version,
) -> Result<GlobalBootstrapState, BootstrapError> {
    massa_trace!("bootstrap.lib.get_state_internal", {});
    info!("Start bootstrapping from {}", bootstrap_addr);

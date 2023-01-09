import React from "react";

const Marker = (options) => {
  const [marker, setMarker] = React.useState();

  React.useEffect(() => {
    if (!marker) {
      const { map, position, data } = options;
      const { hideText, textIndex } = data;

      if (!hideText) {
        return;
      }

      const markerView = new window.google.maps.marker.AdvancedMarkerView({
        map,
        position,
        zIndex: textIndex,
        collisionBehavior:
          window.google.maps.CollisionBehavior
            .OPTIONAL_AND_HIDES_LOWER_PRIORITY,
      });

      setMarker(markerView);
    }

    return () => {
      if (marker) {
        marker.map = null;
      }
    };
  }, [marker]);

  return null;
};

export default Marker;
